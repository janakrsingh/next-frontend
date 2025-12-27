import { fetchAPI } from '@/lib/api';
import { notFound } from 'next/navigation';
import Reveal from '@/components/Reveal';

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ServiceDetail({ params }: Props) {
  const { slug } = await params; // ✅ IMPORTANT FIX

  const data = await fetchAPI(`/wp/v2/services?slug=${slug}`);

  if (!data || data.length === 0) {
    return notFound();
  }

  const service = data[0];

  return (
    <main style={{ padding: 40 }}>
      <Reveal>
        <h1>{service.title.rendered}</h1>
      </Reveal>

      <div
        dangerouslySetInnerHTML={{
          __html: service.content.rendered,
        }}
      />
    </main>
  );
}
