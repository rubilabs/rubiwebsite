import Rubi from '../../public/assets/rubi.png';

const posts = [
    {
      title: 'We closed the deal for our angel round',
      href: '#',
      category: { name: 'Article', href: '#', color: 'bg-blue-100 text-indigo-800' },
      description:
        'We are pleased to announce that we have closed the deal for our angel round investment.',
      date: 'Jan 18, 2023',
      datetime: '2023-01-18',
      author: {
        name: 'Rubi Labs',
        href: '#',
        imageUrl:
          Rubi,
      },
      readingTime: '5 min',
    },
    {
      title: 'Blockchain technology explanation guide',
      href: '#',
      category: { name: 'Video', href: '#', color: 'bg-pink-100 text-pink-800' },
      description:
        'Check out our YouTube channel, where we collaborate with other companies to held blockchain discussions.',
      date: 'Mar 10, 2020',
      datetime: '2020-03-10',
      author: {
        name: 'Rubi Labs',
        href: '#',
        imageUrl:
          Rubi,
      },
      readingTime: '4 min',
    },
    {
      title: 'How to integrate to legacy system?',
      href: '#',
      category: { name: 'Case Study', href: '#', color: 'bg-green-100 text-green-800' },
      description: 'Do you recall the legacy system that we used few decades back? Lets see on how we can integrate to this system.',
      date: 'Jan 29, 2023',
      datetime: '2023-01-29',
      author: {
        name: 'Rubi Labs',
        href: '#',
        imageUrl:
          Rubi,
      },
      readingTime: '10 min',
    },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function CaseStudy() {
    return (
      <div className="bg-white px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28 select-none">
        <div className="relative mx-auto max-w-lg divide-y-2 divide-gray-200 lg:max-w-7xl">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Recent publications</h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              Check out our latest information shared by our media team.
            </p>
          </div>
          <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
            {posts.map((post) => (
              <div key={post.title}>
                <div>
                  <a href={post.category.href} className="inline-block">
                    <span
                      className={classNames(
                        post.category.color,
                        'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium'
                      )}
                    >
                      {post.category.name}
                    </span>
                  </a>
                </div>
                <a href={post.href} className="mt-4 block">
                  <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                  <p className="mt-3 text-base text-gray-500">{post.description}</p>
                </a>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href={post.author.href}>
                      <span className="sr-only">{post.author.name}</span>
                      <img className="h-10 w-10 rounded-full" src={post.author.imageUrl} alt="" />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <a href={post.author.href}>{post.author.name}</a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={post.datetime}>{post.date}</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>{post.readingTime} read</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  