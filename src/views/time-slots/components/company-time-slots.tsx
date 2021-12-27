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
    background-color: rgba(0,0,0,.20);
    padding: 2rem;
`

const Scrollable = styled.div`
    overflow: auto;
    height: 70vh;
`

type Props = {
    company: TCompany
}

const CompanyTimeSlots = (props: Props) => {
    const { company } = props

    return (
        <Container>
            {company.name}
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