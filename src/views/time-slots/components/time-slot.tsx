import React from 'react'
import styled from 'styled-components'
import { TTimeSlot } from 'types/ui'

const Container = styled.button<{disabled?: boolean, selected?: boolean}>`
    display: block;
    width: 100%;
    padding: 1rem;
    color: ${p => p.disabled ? p.theme.colors.grey : p.theme.colors.black};
    border: .2rem solid ${p => p.selected ? p.theme.colors.secondary : 'transparent'};
    outline: 0;
    cursor: pointer;
    pointer-events: ${p => p.disabled ? 'none' : 'auto'};
    border-radius: ${p => p.theme.borderRadius.default};
    background: transparent;

    &:hover {
        transition: background .2s ease;
        background: rgba(252, 186, 3, .25);
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
        <Container disabled={disabled} selected={selected} onClick={() => !disabled && onClick()}>
            {`${timeSlot.formattedStartDate} - ${timeSlot.formattedEndDate}`}
        </Container>
    )
}

export default TimeSlot