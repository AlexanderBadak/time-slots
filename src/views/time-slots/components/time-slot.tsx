import React from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import { TTimeSlot } from 'types/ui'

dayjs.extend(localizedFormat)

const Container = styled.div<{$disabled?: boolean, selected?: boolean}>`
    padding: 1rem;
    color: ${p => p.$disabled ? 'white' : 'black'};
    border: 1px solid ${p => p.selected ? 'purple' : 'transparent'};
    cursor: ${p => p.$disabled ? 'not-allowed' : 'pointer'};
    &:hover {
        background: red;
    }
`

type Props = {
    timeSlot: TTimeSlot
    disabled?: boolean
    selected?: boolean
    onClick: () => void
}

const TimeSlot = (props: Props) => {
    const { timeSlot, disabled, selected, onClick } = props

    return (
        <Container $disabled={disabled} selected={selected} onClick={() => !disabled && onClick()}>
            {`${timeSlot.formattedStartDate} - ${timeSlot.formattedEndDate}`}
        </Container>
    )
}

export default TimeSlot