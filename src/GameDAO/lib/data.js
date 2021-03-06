export const rnd = top => Math.round( Math.random() * ( top - 1 ) )

export const jsonEndpoint = 'https://api.pinata.cloud/pinning/pinJSONToIPFS'

// dropdown content

// dao

export const dao_bodies = [
	{ key: '0', text: 'Individual', value: 0 },
	{ key: '1', text: 'Off Chain Organization', value: 1},
	{ key: '2', text: 'On Chain / DAO', value: 2 },
	{ key: '3', text: 'Hybrid DAO', value: 3 }
]
export const dao_member_governance = [
	{ key: '0', text: 'Open', value: 0 },
	{ key: '1', text: 'Invitation', value: 1 },
	{ key: '2', text: 'Proposal', value: 2 },
]
// common good daos could operate without fees
// reserves work as a deposit which is released upon exit
// payment works well in for profit organizations

export const dao_fee_model = [
	{ key: '0', text: 'reserve', value: 0 }, // fees are reserved in actor account
	{ key: '1', text: 'transfer', value: 1 }, // fees are paid to treasury
]

// anybody can join | only member can add | only controller can add

// campaign

export const project_entities = [
	{ key: '0', text: 'On Chain DAO', value: 'legal-dao' },
	{ key: '1', text: 'Hybrid DAO / DAC / LAO', value: 'hybrid-dao' },
	{ key: '2', text: '------ traditional ------', value: null },
	{ key: '3', text: 'Cooperative / LVC', value: 'coop' },
	{ key: '4', text: 'AG / SA', value: 'ag' },
	{ key: '5', text: 'GmbH / SARL / LLC', value: 'gmbh' },
	{ key: '6', text: 'Individual', value: 'individual' },
	{ key: '7', text: 'other', value: 'other' },
]

export const project_types = [
	{ key: '0', text: 'Game', value: 'game' },
	{ key: '1', text: 'Content', value: 'content' },
	{ key: '2', text: 'Team', value: 'team' },
	{ key: '3', text: 'Other', value: 'other' },
]

export const protocol_types = [
	{ key: '0', text: 'Grant', value: '0' },
	{ key: '1', text: 'Prepaid', value: '1' },
	{ key: '2', text: 'Loan', value: '2' },
	{ key: '3', text: 'Shares', value: '3' },
	{ key: '4', text: 'Shares', value: '4' },
]

export const countries = [
	{ key: '0', flag: 'eu', text: 'Europe', value: 'eu' },
	{ key: '1', flag: 'de', text: 'Germany', value: 'de' },
	{ key: '2', flag: 'ch', text: 'Switzerland', value: 'ch' },
	{ key: '3', flag: 'li', text: 'Liechtenstein', value: 'li' },
]

export const curve_function = [
	{ key: '0', text: 'linear', value: 'x=y' },
	{ key: '1', text: 'progressive', value: '1' },
]

//

export const CampaignProtocol = {
	0 : 'GRANT',   // get money from donators and or gamedao treasury
	1 : 'PREPAID', // raise money which will be released based on milestones or dao governance
	2 : 'LOAN',    // get a loan from individuals and or gamedao treasury, interest applies.
	3 : 'SHARE',   // raise money for n shares of your project
	4 : 'DAO',     // raise money which resides in a treasury and is released based on requests
}

export const CampaignGovernance = {
	0 : 'DEFAULT',
	1 : 'DAO',
}

// durations will be converted to blocks
// where 1 day == 3sec blocktime * 20 * 60 * 24 == 86400 blocks
export const blockTime = 3

export const blockFactor = blockTime * ( 60 / blockTime) * 60 * 24

export const project_durations = [
	{ key: '0', text: '1 day', value: '1' },
	{ key: '1', text: '7 days', value: '7' },
	{ key: '2', text: '30 days', value: '30' },
	{ key: '3', text: '100 days', value: '100' },
	{ key: '4', text: '1 year', value: '365' },
]

export const blocksToTime = blocks => {
	const ss = blocks * blockTime
	const mm = blocks / 60
	const hh = mm / 60
	const dd = hh / 24
	return `${dd}:${hh}:${mm}:${ss}`
}

//

export const data = {
	jsonEndpoint,
	project_entities,
	project_types,
	protocol_types,
	countries,
	curve_function,
	project_durations,
	blockTime,
	blockFactor,
	dao_bodies,
	dao_member_governance,
	dao_fee_model,
}

export default data