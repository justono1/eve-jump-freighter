import { JumpRunModel } from "../models";
import * as JumpRunActions from "../actions/jump-run.action";
import { v1 as uuid } from "uuid";

const initialState:JumpRunModel[] = [
    {
      id: uuid(),
      date: new Date('January 25, 2019'),
      orders: [
        {
          name: "Nitrogen Isotopes",
          buyPrice: 1000,
          sellPrice: 2000,
          quantity: 200
        },
        {
          name: "Hydrogen Isotopes",
          buyPrice: 600,
          sellPrice: 2000,
          quantity: 2000
        },
        {
          name: "Helium Isotopes",
          buyPrice: 300,
          sellPrice: 1000,
          quantity: 2450
        },
        {
          name: "Oxygen Isotopes",
          buyPrice: 800,
          sellPrice: 1000,
          quantity: 2000
        }
      ]
    },
    {
      id: uuid(),
      date: new Date('January 31, 2019'),
      orders: [
        {
          name: "Rail Gun T2",
          buyPrice: 1500000,
          sellPrice: 3000000,
          quantity: 180
        },
        {
          name: "Republic Fleet EMP",
          buyPrice: 300,
          sellPrice: 900,
          quantity: 200000
        }
      ]
    },
    {
      id: uuid(),
      date: new Date('February 2, 2019'),
      orders: [
        {
          name: "Expanded Cargo Hold T2",
          buyPrice: 400000,
          sellPrice: 1000000,
          quantity: 100
        }
      ]
    },
    {
      id: uuid(),
      date: new Date('February 4, 2019'),
      orders: [
        {
          name: "Expanded Cargo Hold T2",
          buyPrice: 400000,
          sellPrice: 1000000,
          quantity: 100
        }
      ]
    }
]


export function jumpRunReducer(
    state: JumpRunModel[] = initialState,
    action: JumpRunActions.Actions
) {
    switch(action.type) {
        case JumpRunActions.ActionTypes.AddJumpRun:
            return [
                ...state,
                action.paylod
            ];
        case JumpRunActions.ActionTypes.RemoveJumpRun:
            return state.filter(r => r.id !== action.paylod);
        default:
            return state;
        
    }
}

