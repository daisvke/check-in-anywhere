import styled from 'styled-components'

const Paragraph = styled.p`
  font-family: Tahoma, sans-serif;
  text-align: left;
`

function LegalDamages() {
  return (
    <div>
      <Paragraph>
        The hotel-keeper is allowed to charge the client’s credit card to pay
        his/her damage cost (mirror or glass broken, coverlet burnt, ...)
      </Paragraph>
      <Paragraph>
        ALL OUR ROOMS ARE NON-SMOKING SHOULD THE CLIENT NOT COMPLY WITH THIS
        REGULATION, 200 EUROS WILL BE CHARGED AT THE CHECK-OUT
      </Paragraph>
      <Paragraph>
        The IT resources that the hotel Louvre Sainte Anne offers should in no
        way be used for reproduction, representation, provision or communication
        to the public of works or objects protected by law copyright or related
        right, such as text, images, photographs, musical works, audiovisual
        works, software and video games without the permission of copyright
        holders provided the books I and II of the Code of intellectual property
        when such authorization is required. The user is obliged to comply with
        the security policy of the Louvre Sainte Anne Hotel including rules for
        using security means implemented in order to prevent misuse of computer
        resources, and is refrain from any act detrimental to the effectiveness
        of these methods. Responsibility of the holder of access does not
        exclude that of the user who can be blamed for copyright infringement
        (Article L. 335-3 of the Code of Intellectual Property).
      </Paragraph>
    </div>
  )
}

export default LegalDamages
