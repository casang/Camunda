export interface CreditRequest {
	"value": number,
	"approvedCod": string,
  "period": number,
  "email": string
}

/* body request do POST para o Camunda
{
	"variables": {
		"amount": {
			"value":555,
			"type":"long"
		},
		"item": {
			"value": "item-xyz"
		}
	}
}
*/

export interface CreditRequestCamunda {
	"variables": {
    "amount": {
      "value": number,
      "type": "Long"
    },
    "item": {
			"value": string
		}
    "email": {
      "value": string
    }
  }
}

export function CreditRequestToCamunda (cr: CreditRequest): CreditRequestCamunda {
  return <CreditRequestCamunda>{
    "variables": {
      "amount": {
        "value": cr.value
      },
      "item": {
        "value": cr.approvedCod
      },
      "email": {
        "value": cr.email
      }
    }
  }
}

export interface RespCreditRequest {
  "definitionId": string,
  "approved": number
}
