import articles from '@/data/articles.json'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='ml-72'>
      <div className='flex-center bg-orange-400 bg-orange-400w-full h-[35vh]'>
        <p>Algo chamativo</p>
      </div>
      <div className='mx-auto my-6 container'>
        <div className='gap-4 grid grid-cols-4 h-[35vh]'>
          {articles.splice(-4).map(article => {
            return (
              <div key={article.title} className='relative flex-center overflow-hidden'>
                <div className='w-full h-full'>
                  <Image
                    className='rounded-r-lg w-full h-full transition duration-500 object-cover hover:scale-105'
                    src={`/assets/images/articles/${article.image}`}
                    alt={article.title}
                    width={600}
                    height={400}
                  />
                </div>
                <p className='bottom-0 absolute bg-gradient-to-t from-slate-900 via-slate-800 to-transparent px-2 pt-6 pb-2 w-full'>
                  {article.title}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      <div className='mx-auto my-6 container'>
        <div className='gap-4 grid grid-cols-12'>
          <div className='flex flex-col gap-4 col-span-8'>
            {articles.map(article => {
              return (
                <div key={article.title} className='flex bg-slate-800 py-4 rounded-md'>
                  <div className='flex items-center'>
                    <div className='rounded-r-lg h-40 overflow-hidden'>
                      <Image
                        className='rounded-r-lg w-full h-full transition duration-500 object-cover hover:scale-105'
                        src={`/assets/images/articles/${article.image}`}
                        alt={article.title}
                        width={600}
                        height={400}
                      />
                    </div>
                  </div>
                  <div className='flex flex-col gap-2 pl-4 w-full'>
                    <h2 className='mb-4 text-3xl'>{article.title} </h2>
                    <p className='flex-grow text-slate-400'>{article.excerpt} </p>
                    <button className='inline bg-slate-700 hover:bg-indigo-400 px-4 py-2 rounded-lg max-w-max transition-all duration-150'>
                      Ler mais
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
          <div className='col-span-4 bg-emerald-500'>B</div>
        </div>
      </div>
    </div>
  )
}
