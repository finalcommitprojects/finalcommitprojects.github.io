// Every contact detail on the site comes from here. Change it once, it changes everywhere.
export const site = {
  name: 'Final Commit',
  url: 'https://finalcommitprojects.github.io',
  tagline: 'Final-year projects, built with you and explained till your viva.',
  description:
    'Software projects for BE, B.Tech, MCA, BCA, B.Sc and M.Tech students across India. Pick from 75+ projects or bring your own idea. Code, report, PPT, diagrams and viva prep included.',
  phone: '+91 81971 12324',
  phoneHref: 'tel:+918197112324',
  whatsapp: '918197112324',
  email: 'finalcommitprojects@gmail.com',
  hours: '10 am to 9 pm, every day',
  replyTime: 'We usually reply within a few hours.',
  // Umami Cloud website ID (cloud.umami.is). Empty = no analytics script on the page.
  umamiId: 'f6b0f6cf-bb7f-4bd1-917e-acc1d8116251',
  // Add these once the pages exist; empty values are hidden.
  instagram: '',
  youtube: '',
};

export const greeting = `Hi ${site.name}, I'm looking for a project. Can we talk?`;

export const wa = (text: string = greeting) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

export const mailto = (subject: string, body = '') =>
  `mailto:${site.email}?subject=${encodeURIComponent(subject)}${body ? `&body=${encodeURIComponent(body)}` : ''}`;
