import React, { useContext } from 'react'
import styled from 'styled-components'
import { TimeSlotsContext } from '../time-slots-provider'

const SelectedTimeSlot = styled.div`
    padding: 2rem;
    background-color: rgba(0,0,0,.25);
`

type Props = {
    companyId: number
}

const CompanySelectedTimeSlot = (props: Props) => {
    const { companyId } = props

    const { selectedTimeSlots } = useContext(TimeSlotsContext)

    const selectedTimeSlot = selectedTimeSlots?.find(sts => sts.id === companyId)

    const formatMessage = () : string => {
        if (selectedTimeSlot) {
            return `${selectedTimeSlot.timeSlot.formattedStartDate} - ${selectedTimeSlot.timeSlot.formattedEndDate}`
        }

        return 'No reservation'
    }

    return (
        <SelectedTimeSlot>
            {formatMessage()}
        </SelectedTimeSlot>
    )
}

export default CompanySelectedTimeSlot