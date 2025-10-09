import * as React from "react";

export interface IBlogSlugLayoutProps {
  children: React.ReactNode;
}

type PropsParams = {
  params: Promise<{ slug: string }>;
};

// Dynamic Metadata
export async function generateMetadata({
  params,
}: PropsParams): Promise<Metadata> {
  const slug = (await params).slug;

  return {
    title: slug,
  };
}

export default function BlogSlugLayout(props: IBlogSlugLayoutProps) {
  return <div>{props.children}</div>;
}
