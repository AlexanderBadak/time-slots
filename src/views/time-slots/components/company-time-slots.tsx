import React from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import { TCompany } from 'types/ui'
import TimeSlotGroup from './time-slot-group'
import CompanySelectedTimeSlot from './company-selected-time-slot'

dayjs.extend(localizedFormat)

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgba(0,0,0,.05);
    padding: 2rem;
    width: 25rem;
    row-gap: 1rem;
    border-radius: ${p => p.theme.borderRadius.default};
`
const CompanyName = styled.h2`
    color: ${p => p.theme.colors.black};
`

const Scrollable = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    text-align: center;
    overflow: auto;
    height: 60vh;
    border-radius: ${p => p.theme.borderRadius.default};
`

type Props = {
    company: TCompany
}

const CompanyTimeSlots = (props: Props) => {
    const { company } = props

    return (
        <Container>
            <CompanyName>{company.name}</CompanyName>
            <CompanySelectedTimeSlot companyId={company.id} />
            <Scrollable>
                {
                    company.timeSlotGroups.map((g, i) => (
                        <TimeSlotGroup
                            key={`${company.id}-${i}`}
                            group={g}
                            companyId={company.id}
                        />)
                    )
                }
            </Scrollable>
        </Container>
    )
}

export default CompanyTimeSlots