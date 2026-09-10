import type { ExperienceItem } from '@/data/profileData'

type Props = {
  items: ExperienceItem[]
  ariaLabel: string
}

export default function ProfileTimeline({ items, ariaLabel }: Props) {
  return (
    <ol aria-label={ariaLabel} className="relative border-s border-gray-200 dark:border-gray-700">
      {items.map((item) => (
        <li key={`${item.company}-${item.title}-${item.dates}`} className="mb-10 ms-6 last:mb-0">
          <span
            aria-hidden="true"
            className="absolute -start-[0.4375rem] mt-1.5 flex h-3.5 w-3.5 rounded-full border-2 border-white bg-primary-500 ring-4 ring-primary-100 dark:border-neutral-900 dark:bg-primary-400 dark:ring-primary-950"
          />
          <div className="grid gap-3 md:grid-cols-[11rem_1fr] md:gap-8">
            <div className="pt-0.5 text-sm font-medium text-gray-500 dark:text-gray-400">
              <time>{item.dates}</time>
              <div className="mt-1 text-xs font-normal text-gray-400 dark:text-gray-500">
                {item.duration}
              </div>
              <div className="mt-1 text-xs font-normal text-gray-400 dark:text-gray-500">
                {item.location}
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                {item.title}
              </h2>
              {item.companyUrl ? (
                <a
                  href={item.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                >
                  {item.company}
                </a>
              ) : (
                <p className="mt-1 font-medium text-primary-600 dark:text-primary-400">
                  {item.company}
                </p>
              )}
              <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-600 dark:text-gray-300">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        </li>
      ))}
    </ol>
  )
}
