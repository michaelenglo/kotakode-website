import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import KotakodeLogo from "../images/kotakode-logo.png"
import "./index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Kotakode" />
    <div className="container">
      <div className="content">
        <img src={KotakodeLogo} className="kotakode-logo" />
        <h3 className="subtitle">Tempat untuk kode dan programmer</h3>
        <h4>Hai Programmers!</h4>
        <h5>
          Terima kasih untuk antusiasi Anda kepada Kotakode. Kami akan segera
          hadir untuk membantu mencari segala pertanyaan programming Anda.
        </h5>
      </div>
      <div className="image-container"></div>
    </div>
  </Layout>
)

export default IndexPage
