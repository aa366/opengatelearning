import Link from 'next/link';
import React from 'react'

interface Props {
  params: Promise<{ id: string[] }>
}

export default async function page({ params }: Props) {
  const { id } = await params
  console.log(id);

  return (
    <div className=' flex flex-col items-center justify-center min-h-dvh text-2xl font-bold'>
      {/* {id?.map((i) => (
        <div key={i}>{i}</div>
      ))} */}
      <a target='_blank'
        href={"https://drive.google.com/file/d/16OeNnlG8J9u-VkU5SUS7HKr_9OKZVfw5/view?usp=drive_link"}
        className=''>
        محاسبةمالية: الوحدة الاولي
      </a>
    </div>
  )
}
