import React, { useContext } from 'react'
import styled from 'styled-components'
import { TTimeSlot, TTimeSlotGroup } from 'types/ui'
import { TimeSlotsContext } from '../time-slots-provider'
import TimeSlot from './time-slot'

const Container = styled.div`
    padding: .5rem 1rem 0rem 1rem;
    background-color: rgba(0,0,0,.35);
`
const GroupName = styled.h3`
    margin-top: 1rem;
    margin-bottom: 1rem;
`

type Props = {
    companyId: number
    group: TTimeSlotGroup
}

const TimeSlotGroup = (props: Props) => {
    const { group, companyId } = props

    console.log('TimeSlotGroup ' + companyId)

    const { selectedTimeSlots, setSelectedTimeSlot, deselectTimeSlot } = useContext(TimeSlotsContext)

    const selectTimeSlot = (timeSlot: TTimeSlot, selected: boolean) => {
        if (selected) {
            deselectTimeSlot!(companyId)
        } else {
            setSelectedTimeSlot!({
                companyId,
                timeSlot
            })
        }
    }

    return (
        <Container>
            <GroupName>
                {group.name}
            </GroupName>
            {
                group.timeSlots.map((ts, i) => {
                    const disabled = selectedTimeSlots && !!selectedTimeSlots.find(sts =>
                        sts.companyId !== companyId && (
                            (sts.timeSlot.startDate.isBefore(ts.startDate) && sts.timeSlot.endDate.isAfter(ts.startDate)) ||
                            (sts.timeSlot.startDate.isBefore(ts.endDate) && sts.timeSlot.endDate.isAfter(ts.startDate)))
                    )

                    const selected = selectedTimeSlots && !!selectedTimeSlots.find(sts => sts.timeSlot === ts)

                    return (
                        <TimeSlot
                            key={`${group.day}-${i}`}
                            timeSlot={ts}
                            disabled={disabled}
                            selected={selected}
                            onClick={() => selectTimeSlot(ts, !!selected)}
                        />)
                })
            }
        </Container>
    )
}

export default TimeSlotGroup