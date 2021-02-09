import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Img from 'gatsby-image'

const About = ({ content }) => {
    const { frontmatter, body } = content[0].node

    return (
        <section id="about" className="my-6 mx-auto container w-3/5">
            <h3 className="text-3xl font-bold mb-6">{frontmatter.title}</h3>
            <div className=" font-light text-lg flex flex-col justify-between max-w-3xl md:flex-row">
                <div className="w-full mx-auto md:w-1/2">
                    <MDXRenderer>{body}</MDXRenderer>
                </div>
                <div className="w-full md:w-1/2">
                    <figure className="w-full mt-4 md:ml-8 ">
                        <Img fluid={frontmatter.image.childImageSharp.fluid} />
                        <figcaption className="text-sm">
                            {frontmatter.caption}
                        </figcaption>
                    </figure>
                </div>
            </div>
        </section>
    )
}

export default About
