import RemoveIcon from 'components/remove-icon'
import { ETimeSlotActions } from 'enums/actions'
import React, { useContext } from 'react'
import styled from 'styled-components'
import { TimeSlotsContext } from '../time-slots-provider'

const SelectedTimeSlot = styled.div`
    display: flex;
    column-gap: 1rem;
    padding: 2rem;
    height: 3rem;
    background-color: ${p => p.theme.colors.black};
    color: ${p => p.theme.colors.secondary};
    font-size: 1.15em;
    border-radius: ${p => p.theme.borderRadius.default};
    align-items: center;
    font-weight: 600;
`
const DayName = styled.span``

const RemoveButton = styled.div`
    display: grid;
    place-items: center;
    margin-left: auto;
    cursor: pointer;

    & > svg {
        stroke: ${p => p.theme.colors.secondary};
    }
`

type Props = {
    companyId: number
}

const CompanySelectedTimeSlot = (props: Props) => {
    const { companyId } = props

    const { state, dispatch } = useContext(TimeSlotsContext)

    const selectedTimeSlot = state!.selectedTimeSlots.find(sts => sts.companyId === companyId)

    const onRemoveClick = () => {
        dispatch!({type: ETimeSlotActions.deselect, payload: {companyId}})
    }

    const formatMessage = () : string => {
        if (selectedTimeSlot) {
            return `${selectedTimeSlot.timeSlot.formattedStartDate} - ${selectedTimeSlot.timeSlot.formattedEndDate}`
        }

        return 'No reservation'
    }

    const dayName = selectedTimeSlot?.timeSlot.startDate.format('ddd') ?? ''

    return (
        <SelectedTimeSlot>
            <DayName>{`${dayName}`}</DayName>
            {formatMessage()}
            {
                selectedTimeSlot &&
                <RemoveButton onClick={onRemoveClick}>
                    <RemoveIcon />
                </RemoveButton>
            }
        </SelectedTimeSlot>
    )
}

export default CompanySelectedTimeSlot