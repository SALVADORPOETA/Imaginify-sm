'use client'

import { dataUrl, download, getImageSize } from '@/lib/utils'
import { CldImage, getCldImageUrl } from 'next-cloudinary'
import { PlaceholderValue } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import React, { useEffect } from 'react'

const TransformedImage = ({
  image,
  type,
  title,
  transformationConfig,
  isTransforming,
  setIsTransforming,
  hasDownload = false,
}: TransformedImageProps) => {
  // Ensure spinner doesn't persist longer than expected
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isTransforming) {
        console.warn('Resetting isTransforming due to timeout')
        setIsTransforming && setIsTransforming(false)
      }
    }, 10000) // Fallback after 10 seconds

    return () => clearTimeout(timeout)
  }, [isTransforming, setIsTransforming])

  const downloadHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()

    download(
      getCldImageUrl({
        width: image?.width,
        height: image?.height,
        src: image?.publicId,
        ...transformationConfig,
      }),
      title
    )
  }

  const handleImageLoad = () => {
    console.log('Image loaded successfully')
    setIsTransforming && setIsTransforming(false) // Reset spinner
  }

  const handleImageError = () => {
    console.error('Failed to load the image')
    setIsTransforming && setIsTransforming(false) // Reset spinner on error
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex-between">
        <h3 className="h3-bold text-dark-600">Transformed</h3>

        {hasDownload && (
          <button
            className="download-btn"
            onClick={downloadHandler}
            disabled={isTransforming}
          >
            <Image
              src="/assets/icons/download.svg"
              alt="Download"
              width={24}
              height={24}
              className="pb-[6px]"
            />
          </button>
        )}
      </div>

      {image?.publicId && transformationConfig ? (
        <div className="relative">
          <CldImage
            width={getImageSize(type, image, 'width')}
            height={getImageSize(type, image, 'height')}
            src={image?.publicId}
            alt={image?.title || 'Transformed Image'}
            sizes={'(max-width: 767px) 100vw, 50vw'}
            placeholder={dataUrl as PlaceholderValue}
            className="transformed-image"
            onLoad={handleImageLoad}
            onError={handleImageError}
            {...transformationConfig}
          />

          {isTransforming && (
            <div className="transforming-loader">
              <Image
                src="/assets/icons/spinner.svg"
                width={50}
                height={50}
                alt="spinner"
              />
              <p className="text-white/80">Please wait...</p>
            </div>
          )}
        </div>
      ) : (
        <div className="transformed-placeholder">Transformed Image</div>
      )}
    </div>
  )
}

export default TransformedImage
