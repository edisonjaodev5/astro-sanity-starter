import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

const resend = new Resend(import.meta.env.RESEND_API_KEY);

const RECIPIENT_EMAIL = import.meta.env.CONTACT_EMAIL ?? 'contacto@tudominio.cl';

function formatEmpresaEmail(data: Record<string, string>): string {
  return `
    <h2 style="color:#D4A843">Nueva solicitud — Empresa</h2>
    <table style="width:100%;border-collapse:collapse;font-family:sans-serif">
      <tr><td style="padding:8px;font-weight:bold">Razón Social</td><td>${data.razonSocial}</td></tr>
      <tr><td style="padding:8px;font-weight:bold">RUT Empresa</td><td>${data.rutEmpresa}</td></tr>
      <tr><td style="padding:8px;font-weight:bold">Contacto</td><td>${data.nombreContacto}</td></tr>
      <tr><td style="padding:8px;font-weight:bold">Cargo</td><td>${data.cargo || '—'}</td></tr>
      <tr><td style="padding:8px;font-weight:bold">Email</td><td>${data.email}</td></tr>
      <tr><td style="padding:8px;font-weight:bold">Teléfono</td><td>${data.telefono || '—'}</td></tr>
      <tr><td style="padding:8px;font-weight:bold">Giro</td><td>${data.giro}</td></tr>
      <tr><td style="padding:8px;font-weight:bold">Servicio</td><td>${data.servicio}</td></tr>
      <tr><td style="padding:8px;font-weight:bold">Mensaje</td><td>${data.mensaje || '—'}</td></tr>
    </table>
  `;
}

function formatPersonaEmail(data: Record<string, string>): string {
  return `
    <h2 style="color:#D4A843">Nueva consulta — Persona Natural</h2>
    <table style="width:100%;border-collapse:collapse;font-family:sans-serif">
      <tr><td style="padding:8px;font-weight:bold">Nombre</td><td>${data.nombre}</td></tr>
      <tr><td style="padding:8px;font-weight:bold">RUT</td><td>${data.rut}</td></tr>
      <tr><td style="padding:8px;font-weight:bold">Email</td><td>${data.email}</td></tr>
      <tr><td style="padding:8px;font-weight:bold">Teléfono</td><td>${data.telefono}</td></tr>
      <tr><td style="padding:8px;font-weight:bold">Situación</td><td>${data.situacion}</td></tr>
      <tr><td style="padding:8px;font-weight:bold">Mensaje</td><td>${data.mensaje}</td></tr>
    </table>
  `;
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json() as Record<string, string>;
    const isEmpresa = data.formType === 'Empresa';

    const subject = isEmpresa
      ? `Nueva solicitud empresa: ${data.razonSocial}`
      : `Nueva consulta: ${data.nombre}`;

    const html = isEmpresa
      ? formatEmpresaEmail(data)
      : formatPersonaEmail(data);

    const { error } = await resend.emails.send({
      from: 'Formulario Web <noreply@qfasesorias.cl>',
      to: [RECIPIENT_EMAIL],
      replyTo: data.email,
      subject,
      html
    });

    if (error) {
      return new Response(JSON.stringify({ ok: false, error }), { status: 500 });
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200 });

  } catch (err) {
    return new Response(JSON.stringify({ ok: false, error: String(err) }), { status: 500 });
  }
};