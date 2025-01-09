import Image from 'next/image'
import { redirect } from 'next/navigation'
import { Collection } from '@/components/shared/Collection'
import Header from '@/components/shared/Header'
import { getUserImages } from '@/lib/actions/image.actions'
import { getUserById } from '@/lib/actions/user.actions'
import { auth } from '@clerk/nextjs/server'

const Profile = async ({ searchParams }: SearchParamProps) => {
  const page = Number((await searchParams)?.page) || 1
  const { userId } = await auth()

  if (!userId) redirect('/sign-in')

  const user = await getUserById(userId)
  const images = await getUserImages({ page, userId: user._id })

  // Fetch the images for all pages
  let totalImages = 0
  let currentPage = 1
  let totalPages = 1

  while (currentPage <= totalPages) {
    const images = await getUserImages({ page: currentPage, userId: user._id })
    totalImages += images?.data.length || 0
    totalPages = images?.totalPages || 1
    currentPage += 1
  }

  return (
    <>
      <Header title="Profile" />

      <section className="profile">
        <div className="profile-balance">
          <p className="p-14-medium md:p-16-medium">CREDITS AVAILABLE</p>
          <div className="mt-4 flex items-center gap-4">
            <Image
              src="/assets/icons/coins.svg"
              alt="coins"
              width={50}
              height={50}
              className="size-9 md:size-12"
            />
            <h2 className="h2-bold text-dark-600">{user.creditBalance}</h2>
          </div>
        </div>

        <div className="profile-image-manipulation">
          <p className="p-14-medium md:p-16-medium">IMAGES IN MY GALLERY</p>
          <div className="mt-4 flex items-center gap-4">
            <Image
              src="/assets/icons/photo.svg"
              alt="coins"
              width={50}
              height={50}
              className="size-9 md:size-12"
            />
            <h2 className="h2-bold text-dark-600">{totalImages}</h2>
          </div>
        </div>
      </section>

      <section className="mt-8 md:mt-14">
        <Collection
          images={images?.data}
          totalPages={images?.totalPages}
          page={page}
        />
      </section>
    </>
  )
}

export default Profile
