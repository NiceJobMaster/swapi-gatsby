import React, { Component } from 'react'
import './index.module.scss'
import '../../node_modules/animate.css/animate.css'
import 'aos/dist/aos.css'
import Spinner from '../components/spinner/spinner'
import IndexPage from '../components/indexPage/indexPage'


class Index extends Component {
  state = {
    loading: true,
  }
  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 1500)
  }

  render() {
    const { loading } = this.state
    if (loading) {
      return <Spinner />
    }
    return <IndexPage />
  }
}

export default Index
