import React from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import { TTimeSlot } from 'types/ui'

dayjs.extend(localizedFormat)

const Container = styled.div`
    padding: 1rem;
`

type Props = {
    timeSlot: TTimeSlot
}

const TimeSlot = (props: Props) => {
    const { timeSlot } = props

    return (
        <Container>
            {`${timeSlot.formattedStartDate} - ${timeSlot.formattedEndDate}`}
        </Container>
    )
}

export default TimeSlot