import Layout from '@/components/layout';
import { getBlogPosts } from './actions';
import { BlogList } from './components/BlogList';
import { SectionHero } from '@/components/ui/SectionHero';
import { Suspense } from 'react';

export default async function Page() {
  const posts = await getBlogPosts();

  return (
    <Layout title={'F&F (Family & Friends)'}>
      <div className="container mx-auto px-4 py-16">
        <SectionHero
          title="Private"
          subtitle={
            <>
              Just a collection of Family Videos and Pictures I can share with my mother
              <br />
              <span style={{ opacity: 0.8 }}>(not professional but effective)</span>
            </>
          }
        />
        <Suspense
          fallback={<div className="py-12 text-center">Loading posts...</div>}
        >
          <BlogList posts={posts} />
        </Suspense>
      </div>
    </Layout>
  );
}
