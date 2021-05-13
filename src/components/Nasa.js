import React, { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'

function Nasa() {
  const [img, setImg] = useState([])
  const [startDate, setStartDate] = useState(new Date())

  const getImg = async (dd, mm, yyyy) => {
    const today = yyyy + '-' + mm + '-' + dd

    try {
      const url =
        'https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos?earth_date=' +
        today +
        '&api_key=' +
        process.env.REACT_APP_NASA_API_KEY

      const res = await axios.get(url)
      setImg(res.data.photos)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    let today = new Date()
    const dd = String(today.getDate()).padStart(2, '0')
    const mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
    const yyyy = String(today.getFullYear())

    getImg(dd, mm, yyyy)
  }, [])

  const handleSearch = () => {
    const m = startDate.getMonth() + 1
    const d = startDate.getDate()
    const y = startDate.getFullYear()

    getImg(d, m, y)
  }

  const selected_date = () => {
    const m = startDate.getMonth() + 1
    const d = startDate.getDate()
    const y = startDate.getFullYear()

    return d + '-' + m + '-' + y
  }

  const handleClick = (el) => {
    console.log(el)
  }

  return (
    <div className="component-div">
      <div>
        <h3>Mars rover images of {selected_date()} </h3>
        <button
          onClick={handleSearch}
          className="pageSelector selected"
          style={{ marginRight: '15px' }}
        >
          Search
        </button>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>

      <ul>
        {img.length !== 0 ? (
          img.map((el) => {
            return (
              <li className="li-nasa" key={el.id}>
                <img
                  onClick={() => {
                    handleClick(el)
                  }}
                  className="img-nasa"
                  src={el.img_src}
                  alt={el.camera.full_name + ' image'}
                ></img>
              </li>
            )
          })
        ) : (
          <h3>Perseverance didn't send any image today</h3>
        )}
      </ul>
    </div>
  )
}

export default Nasa
