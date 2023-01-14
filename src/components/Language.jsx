import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import colors from '../utils/colors'

const LanguageList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
  list-style: none;
  font-size: 0.95em;
  padding: 0;
`

const Language = styled.li`
  margin-bottom: 1em;
  text-transform: uppercase;
  background-color: ${colors.pink};
  padding: 0.3em;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`

function ChooseLanguage() {
  const dispatch = useDispatch()

  return (
    <LanguageList>
      <Language
        onClick={() => {
          dispatch({ type: 'nextPage' })
          dispatch({
            type: 'setEnv',
            payload: { name: 'language', value: 'eng' },
          })
        }}
      >
        english
      </Language>
      <Language
        onClick={() => {
          dispatch({ type: 'nextPage' })
          dispatch({
            type: 'setEnv',
            payload: { name: 'language', value: 'fr' },
          })
        }}
      >
        french
      </Language>
    </LanguageList>
  )
}

export default ChooseLanguage
