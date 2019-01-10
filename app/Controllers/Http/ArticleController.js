'use strict'

const Article = use('App/Models/Article')

class ArticleController {
  /**
   * Handle the request to get all articles
   */
  async index ({ response }) {
    const articles = await Article.all()

    return response.status(200).json({ articles })
  }

  /**
   * Handle the request to store an article
   */
  async store ({ request, response }) {
    const {
      title,
      description,
      content,
      published_at
    } = request.all()

    const article = await Article.create({
      title,
      description,
      content,
      published_at
    })

    return response.status(201).json({ article })
  }

  /**
   * Handle the request to delete an article
   */
  async delete ({ params, response }) {
    const article = await Article.find(params.id)

    await article.delete()

    return response.status(200).json({
      message: 'Article deleted successfully.'
    })
  }
}

module.exports = ArticleController
