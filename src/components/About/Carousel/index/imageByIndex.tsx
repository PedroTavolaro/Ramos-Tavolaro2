import image1 from '../Images/about1.png'
import image2 from '../Images/about1.png'
import image3 from '../Images/about1.png'
import image4 from '../Images/about1.png'



export const images = [image1, image2, image3, image4]

const imageByIndex = (index: number) => images[index % images.length]

export default imageByIndex
