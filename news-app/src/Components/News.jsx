import techImg from '../assets/images/tech.jpg'
import worldImg from '../assets/images/world.jpg'
import sportsImg from '../assets/images/sports.jpg'
import scienceImg from '../assets/images/science.jpg'
import healthImg from '../assets/images/health.jpg'
import entertainmentImg from '../assets/images/entertainment.jpg'
import nationImg from '../assets/images/nation.jpg'
import noImg from '../assets/images/no-img.png'
import './News.css'
import { useEffect, useState } from 'react'
import NewsModal from './NewsModal'

const categories = ['general', 'world', 'business', 'technology', 'entertainment', 'sports', 'science', 'health', 'nation']


function News() {
  const [headline, setHeadline] = useState(null)
  const [news, setNews] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('general')
  const [showModal, setShowModal] = useState(false)
  const [selectedArticle, setSelectedArticle] = useState(null)

  useEffect(() => {
    const fetchNews = async () => {
      const url = `https://gnews.io/api/v4/top-headlines?category=${selectedCategory}&lang=en&max=10&apikey=${import.meta.env.VITE_API_KEY}`
      const res = await fetch(url)
      const data = await res.json()

      const fetchedNews = data.articles

      fetchedNews.forEach((article) => {
        if(!article.image) {
          article.image = noImg
        }
      })

      setHeadline(fetchedNews[0])
      setNews(fetchedNews.slice(1, 7))
    }

    fetchNews()
  }, [selectedCategory])

  const handleCategoryClick = (e, category) => {
    e.preventDefault()
    setSelectedCategory(category)
  }

  const handleArticleClick = (article) => {
    setSelectedArticle(article)
    setShowModal(true)
  }

  return (
    <div className="news-app">
      <div className="news-header">
        <h1 className="logo">News App</h1>
      </div>
      <div className="news-content">
        <nav className="navbar">
          <h1 className="nav-heading">Categories</h1>
          <div className="categories">
            {categories.map((category) => (
                <a 
                href="#" 
                className="nav-link" 
                key={category} 
                onClick={e => {
                  handleCategoryClick(e, category)
                }}
                >
                  {category}
                </a>
              ))
            }
          
          </div>
        </nav>
        <div className="news-section">
          {headline && (
            <div className="headline" onClick={() => handleArticleClick(headline)}>
            <img src={headline.image || noImg} alt={headline.title} />
            <h2 className="headline-title">{headline.title}</h2>
          </div>
          )}
          
          <div className="news-grid">
            {news.map((article, index) => (
              <div className="news-grid-item" key={index} onClick={() => handleArticleClick(article)}>
                <img src={article.image || noImg} alt={article.title} />
                <h3>{article.title}</h3>
              </div>
            ))}
            
          </div>
        </div>
        <NewsModal show={showModal} article={selectedArticle} onClose={() => {
          setShowModal(false)
        }}/>
      </div>
      <footer>
        <p className="copyright">
          <span>News App</span>
        </p>
        <p>&copy; All Rights Reserved.</p>
      </footer>
    </div>
  )
}

export default News;