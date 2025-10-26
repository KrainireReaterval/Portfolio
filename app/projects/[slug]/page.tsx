import React from 'react';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-fg mb-4">
          Project: {slug}
        </h1>
        <p className="text-lg text-muted">
          Individual project page - content to be added
        </p>
      </div>
    </main>
  );
}
