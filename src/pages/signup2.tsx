import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useAuth } from '../../context/AuthContext'
import styles from "./signup.module.css"
import Link from 'next/link'

const Signup2 = () => {
  const { user, signup } = useAuth()
  console.log(user)
  const [data, setData] = useState({
    name:'',
    email: '',
    password: '',
  })

  const handleSignup = async (e: any) => {
    e.preventDefault()

    try {
      await signup(data.name,data.email, data.password)
    } catch (err) {
      console.log(err)
    }

    console.log(data)
  }

  return (
    <div className={styles.container}>
    <img src="/clientbanner.png" className={styles.bannerimg}/>
    <div
    className={styles.mainDiv}
      style={{
        width: '60%',
        margin: 'auto',
      }}
    >
      <div className={styles.formMain}>
      <Form onSubmit={handleSignup}>
      <Form.Group className="mb-6" controlId="formBasicName">
          <Form.Label className={styles.formHeading}>Full Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter name"
            required
            onChange={(e: any) =>
              setData({
                ...data,
                name: e.target.value,
              })
            }
            value={data.name}
          />
        </Form.Group>
        <Form.Group className="mb-6" controlId="formBasicEmail">
          <Form.Label className={styles.formHeading}>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            required
            onChange={(e: any) =>
              setData({
                ...data,
                email: e.target.value,
              })
            }
            value={data.email}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label className={styles.formHeading}>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            required
            onChange={(e: any) =>
              setData({
                ...data,
                password: e.target.value,
              })
            }
            value={data.password}
          />
        </Form.Group>

        <Button className={styles.buttonsubmit} variant="primary" type="submit">
          Signup
        </Button>
        <Link className={styles.link} href="/login2">
          Already existing Client ? Login
        </Link>
      </Form>
      </div>
    </div>
    </div>
  )
}

export default Signup2