import React from 'react'
import FeedPhotosItem from './FeedPhotosItem'
import useFetch from '../../Hooks/useFetch'
import { PHOTOS_GET } from '../../api'
import Error from '../helper/Error'
import Loading from '../helper/Loading'
import styles from './FeedPhoto.module.css'

const FeedPhoto = ({setModalPhoto}) => {
    const {data, loading, error, request} = useFetch()

    React.useEffect(() => {
        const fetchPhotos = async () => {
            const {url, options} = PHOTOS_GET({page: 1, total: 6, user: 0})
            const {json} = await request(url, options)
            console.log(json)
        }
        fetchPhotos()
    }, [request])

    if(error) return <Error error={error} />
    if(loading) return <Loading />
    if(data)
  return (
    <div>
      <ul className={`${styles.feed} animeLeft`}>
        {data.map(photo => <FeedPhotosItem key={photo.id} photo={photo} setModalPhoto={setModalPhoto}/>)}
      </ul>
    </div>
  )
  else return null
}

export default FeedPhoto