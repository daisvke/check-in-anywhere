import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import React from 'react'
import styled from 'styled-components'
import colors from '../utils/colors'

const FormNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 5vw;
`

const FormButton = styled.button`
  background-color: ${colors.pink};
  font-weight: 600;

  &:hover {
    opacity: 0.7;
  }
`
const ButtonPrevSpan = styled.span`
  display: inline-block;
  padding: 0.3em;
  transition: 0.9s ease-in;
  color: white;

  &:hover {
    transform: translatex(-25%);
  }
`
const ButtonNextSpan = styled.span`
  display: inline-block;
  padding: 0.3em;
  transition: 0.6s ease-in;
  color: white;

  &:hover {
    transform: translatex(25%);
  }
`

function Navigation() {
  const dispatch = useDispatch()
  const currentPage = useSelector((state) => state.currentPage)
  const totalPages = useSelector((state) => state.totalPages)
  const submitted = useSelector((state) => state.submitted)

  const data = []
  data[0] = useSelector((state) => state.questions.firstname)
  data[1] = useSelector((state) => state.questions.surname)
  data[2] = useSelector((state) => state.questions.arrivalDate)
  data[3] = useSelector((state) => state.questions.departureDate)
  data[4] = useSelector((state) => state.questions.birthDate)
  data[5] = useSelector((state) => state.questions.birthPlace)
  data[6] = useSelector((state) => state.questions.nationality)
  data[7] = useSelector((state) => state.questions.address)
  data[8] = useSelector((state) => state.questions.addressZipCode)
  data[9] = useSelector((state) => state.questions.addressCity)
  data[10] = useSelector((state) => state.questions.addressCountry)
  data[11] = useSelector((state) => state.questions.mobile)
  data[12] = useSelector((state) => state.questions.email)

  const cbNumber = useSelector((state) => state.questions.cbNumber)
  const cbExpDate = useSelector((state) => state.questions.cbExpDate)
  const cbSecurityCode = useSelector((state) => state.questions.cbSecurityCode)
  const signURL = useSelector((state) => state.questions.sign)

  return (
    <FormNav>
      {currentPage > 0 && submitted === false && (
        <FormButton
          onClick={() => {
            dispatch({ type: 'prevPage' })
          }}
        >
          <ButtonPrevSpan>&lt;</ButtonPrevSpan>
        </FormButton>
      )}

      {currentPage > 0 &&
        currentPage < totalPages &&
        ((currentPage === 1 && data[0] && data[1]) ||
          (currentPage === 2 && data[2] && data[3]) ||
          (currentPage === 3 && data[4] && data[5].length > 1 && data[6].length > 3) ||
          (currentPage === 4 &&
            data[7].length > 4 &&
            data[8].length > 1 &&
            data[9].length > 1 &&
            data[10].length > 2) ||
          (currentPage === 5 &&
            data[11].length > 4 &&
            /@(.*)\.[A-Z]/i.test(data[12])) ||
          (currentPage === 6 &&
            cbNumber.length >= 15 &&
            (/0[1-9]\/[0-9][0-9]/.test(cbExpDate) ||
              /1[0-2]\/[0-9][0-9]/.test(cbExpDate)) &&
            cbSecurityCode.length > 2 &&
            cbSecurityCode.length < 5 &&
            signURL)) && (
          <FormButton
            onClick={() => {
              dispatch({ type: 'nextPage' })
            }}
          >
            <ButtonNextSpan>&gt;</ButtonNextSpan>
          </FormButton>
        )}
    </FormNav>
  )
}

export default Navigation
