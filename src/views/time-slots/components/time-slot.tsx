import React from 'react'
import styled from 'styled-components'
import { TTimeSlot } from 'types/api'
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'

dayjs.extend(localizedFormat)

const Container = styled.div`
    padding: 1rem;
    background-color: rgba(0,0,0,.35);
`

type Props = {
    timeSlot: TTimeSlot
}

const TimeSlot = (props: Props) => {
    const { timeSlot } = props

    const startTime = dayjs(timeSlot.start_time).format('LT')
    const endTime = dayjs(timeSlot.end_time).format('LT')

    return (
        <Container>
            {`${startTime} - ${endTime}`}
        </Container>
    )
}

export default TimeSlot