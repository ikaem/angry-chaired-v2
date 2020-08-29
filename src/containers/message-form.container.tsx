import React, { useState, useEffect } from "react"
import styled from "styled-components"

const MessageForm: React.FC = () => {
  const [submissionState, setSubmissionState] = useState<{
    isBeingSent: boolean
    messageStatus: {
      isSuccess: boolean
      messageString: string
    } | null
  }>({
    isBeingSent: false,
    messageStatus: null,
  })

  useEffect(() => {
    if (!submissionState.messageStatus) return

    const timeoutID = setTimeout(() => {
      setSubmissionState(prevState => {
        return { ...prevState, messageStatus: null }
      })
    }, 3000)

    return () => {
      clearTimeout(timeoutID)
    }
  }, [submissionState.messageStatus])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setSubmissionState(prevState => {
      return {
        ...prevState,
        isBeingSent: true,
      }
    })

    const form = e.target as HTMLFormElement
    const formData = new FormData(form)

    try {
      const response = (await fetch(
        process.env.GATSBY_MESSAGING_ENDPOINT as string,
        {
          method: "post",
          body: formData,
        }
      )) as {
        ok: boolean
        redirected: boolean
        status: number
      }

      const { ok, redirected, status } = response

      if (!ok || !redirected || status !== 200) {
        setSubmissionState(prevState => {
          return {
            ...prevState,
            messageStatus: {
              isSuccess: false,
              messageString:
                "Something's wrong. Please try again.",
            },
          }
        })
        throw new Error("Error sending message")
      }

      setSubmissionState(prevState => {
        return {
          ...prevState,
          messageStatus: {
            isSuccess: true,
            messageString:
              "Thank you. I'm on it.",
          },
        }
      })
      form.reset()
    } catch (error) {
      console.log("Error:", error)
    } finally {
      setSubmissionState(prevState => {
        return {
          ...prevState,
          isBeingSent: false,
        }
      })
    }
  }

  return (
    <MessageFormStyled
      isMessageSuccess={submissionState.messageStatus?.isSuccess || false}
      className="message-form"
      onSubmit={handleSubmit}
    >
      <label htmlFor="email" className="message-form_label">
        Email
      </label>
      <input
        type="email"
        name="email"
        id="email"
        className="message-form_input"
        required
      />
      <label htmlFor="message" className="message-form_label">
        Message
      </label>
      <textarea
        name="message"
        id="message"
        cols={30}
        rows={10}
        className="message-form_input"
        required
      ></textarea>
      <button
        type="submit"
        className="message-form_submit-btn"
        disabled={submissionState.isBeingSent}
      >
        Send me a message
      </button>

      <div className="message-form_message-status-container">
        {submissionState.messageStatus && (
          <p>{submissionState.messageStatus.messageString}</p>
        )}
      </div>
    </MessageFormStyled>
  )
}

export default MessageForm

const MessageFormStyled = styled.form<{ isMessageSuccess: boolean }>`
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
  margin-bottom: 1rem;

  .message-form_label {
    color: rgb(223, 223, 223);
    margin-bottom: 0.5rem;
  }

  .message-form_input {
    background-color: #f0f0f0;
    padding: 0.5rem 0.5rem;
    margin-bottom: 1rem;
    color: var(--blue);
    font-weight: 500;
  }

  .message-form_submit-btn {
    padding: 0.5rem;
    background-color: var(--yellow);
    margin-top: 0.5rem;
    font-weight: 500;
    margin-bottom: 1rem;
    cursor: pointer;

    :disabled {
      cursor: not-allowed;
      background-color: grey;
    }
  }

  .message-form_message-status-container {
    height: 2.25rem;

    > p {
      background-color: ${props => (props.isMessageSuccess ? "#3bbb7e" : "var(--red)")};
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: var(--barelyARadius);
      color: white;
      font-weight: 500;
    }
  }

  @media (min-width: 40rem) {
    width: 50%;
    max-width: 20rem;
    margin-bottom: 1rem;
    padding-bottom: 0;
    border-bottom: none;
    margin-bottom: 0;
  }
`
