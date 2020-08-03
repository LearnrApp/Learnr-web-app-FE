import React from 'react'
import Helmet from 'react-helmet'
import ButtonV2 from '../../components/Header/ButtonV2'
import '../../styles/Style.css'

const FourZeroFour = () => {
  const documentTitle = 'Learnr | Page Not Found'

  return (
    <React.Fragment>
      <Helmet>
        <title>{documentTitle}</title>
        <meta
          name="description"
          content="Error 404. Page Not Found."
        />
      </Helmet>
      <div className="four-zero-four">
        <ButtonV2 link={'/'} linkText={'Go to Home'} />
      </div>
    </React.Fragment>
  )
}

export default FourZeroFour