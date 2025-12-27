import Link from 'next/link';
import { fetchAPI } from '@/lib/api';

export default async function ServicesPage() {
  const services = await fetchAPI('/wp/v2/services');

  return (
    <main style={{ padding: 40, maxWidth: 1200, margin: 'auto' }}>
      <h1>Services</h1>

      <ul style={{ marginTop: 30 }}>
        {services.map((service: any) => (
          <li key={service.id} style={{ marginBottom: 20 }}>
            <h3>
              <Link href={`/services/${service.slug}`}>
                {service.title.rendered}
              </Link>
            </h3>

            {service.acf?.short_description && (
              <p>{service.acf.short_description}</p>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}
