import React from 'react'
import styled from 'styled-components'
import { TCompany } from 'types/api'
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'

dayjs.extend(localizedFormat)

const ViewContainer = styled.div`
    
`
const Headline = styled.h1`

`
const CompanyListContainer = styled.div`
    display: flex;
    column-gap: 5rem;
    background-color: rgba(0,0,0,.15);
    padding: 2rem;
`
const CompanyContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgba(0,0,0,.25);
    padding: 2rem;
`
const SelectedTimeSlot = styled.div`
    padding: 2rem;
    background-color: rgba(0,0,0,.35);
`
const TimeSlot = styled.div`
    padding: 1rem;
    background-color: rgba(0,0,0,.35);
`

type Props = {
    companies: TCompany[]
}

const TimeSlotsView = (props: Props) => {
    const { companies } = props

    return (
        <ViewContainer>
            <Headline>{'Company Time Slots'}</Headline>
            <CompanyListContainer>
                {
                    companies.map(c => (
                        <CompanyContainer key={c.id}>
                            {c.name}
                            <SelectedTimeSlot>{'selected timeslot'}</SelectedTimeSlot>
                            {
                                c.time_slots.map((ts, i) => {
                                    const startTime = dayjs(ts.start_time).format('LT')
                                    const endTime = dayjs(ts.end_time).format('LT')

                                    return <TimeSlot key={`${c.id}-${i}`}>{`${startTime} - ${endTime}`}</TimeSlot>
                                })
                            }
                        </CompanyContainer>))
                }
            </CompanyListContainer>

        </ViewContainer>
    )
}

export default TimeSlotsView