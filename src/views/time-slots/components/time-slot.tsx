import React from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import { TTimeSlot } from 'types/ui'

dayjs.extend(localizedFormat)

const Container = styled.div`
    padding: 1rem;
    &:hover {
        background: red;
    }
`

type Props = {
    timeSlot: TTimeSlot
    onClick: () => void
}

const TimeSlot = (props: Props) => {
    const { timeSlot, onClick } = props

    return (
        <Container onClick={onClick}>
            {`${timeSlot.formattedStartDate} - ${timeSlot.formattedEndDate}`}
        </Container>
    )
}

export default TimeSlot