import { MoveType, PlayerType } from 'src/types'

const initialState = {
    isLogged: true,
    users: [
      {
        email: 'test@gmail.com',
        password: 'spalding'
      },
      {
        email: 'allaniko777ok@gmail.com',
        password: 'alla123654'
      }
    ],
    cards: [
        {
          id: 0,
          title: 'РОЖДЕНИЕ (ДЖАНМА)'
        },
        {
          id: 1,
          title: 'ИЛЛЮЗИЯ (МАЙЯ)'
        },
        {
          id: 2,
          title: 'ГНЕВ (КРОДХА)'
        },
        {
          id: 3,
          title: 'ЖАДНОСТЬ (ЛОБХА)'
        },
        {
          id: 4,
          title: 'ПРИЗЕМЛЕННОСТЬ'
        },
        {
          id: 5,
          title: 'ЗАБЛУЖДЕНИЕ'
        },
        {
          id: 6,
          title: 'ТЩЕСЛАВИЕ'
        },
        {
          id: 7,
          title: 'АЛЧНОСТЬ'
        },
        {
          id: 8,
          title: 'ЖЕЛАНИЕ'
        },
        {
          id: 9,
          title: 'ОЧИЩЕНИЕ'
        },
        {
          id: 10,
          title: 'РАЗВЛЕЧЕНИЯ'
        },
        {
          id: 11,
          title: 'ЗАВИСТЬ'
        },
        {
          id: 12,
          title: 'НИЧТОЖНОСТЬ'
        },
        {
          id: 13,
          title: 'АСТРАЛ'
        },
        {
          id: 14,
          title: 'ФАНТАЗИИ'
        },
        {
          id: 15,
          title: 'РЕВНОСТЬ'
        },
        {
          id: 16,
          title: 'СОЧУВСТВИЕ'
        },
        {
          id: 17,
          title: 'РАДОСТЬ'
        },
        {
          id: 18,
          title: 'КАРМА'
        },
        {
          id: 19,
          title: 'БЛАГОТВОРИТЕЛЬНОСТЬ'
        },
        {
          id: 20,
          title: 'ИСКУПЛЕНИЕ'
        },
        {
          id: 21,
          title: 'УНИВЕРСАЛЬНЫЙ ЗАКОН БЫТИЯ'
        },
        {
          id: 22,
          title: 'РАЙСКОЕ МЕСТО'
        },
        {
          id: 23,
          title: 'ПЛОХАЯ КОМПАНИЯ'
        },
        {
          id: 24,
          title: 'ХОРОШАЯ КОМПАНИЯ'
        },
        {
          id: 25,
          title: 'ПЕЧАЛЬ'
        },
        {
          id: 26,
          title: 'СЛУЖЕНИЕ'
        },
        {
          id: 27,
          title: 'ИСТИННАЯ РЕЛИГИОЗНОСТЬ'
        },
        {
          id: 28,
          title: 'БЕЗБОЖИЕ'
        },
        {
          id: 29,
          title: 'ХОРОШАЯ ДОРОГА'
        },
        {
          id: 30,
          title: 'МИЛОСТЬ'
        },
        {
          id: 31,
          title: 'РАВНОВЕСИЕ'
        },
        {
          id: 32,
          title: 'ЗАПАХ'
        },
        {
          id: 33,
          title: 'ВКУС'
        },
        {
          id: 34,
          title: 'ЧИСТИЛИЩЕ'
        },
        {
          id: 35,
          title: 'ЯСНОСТЬ СОЗНАНИЯ'
        },
        {
          id: 36,
          title: 'ПОЗНАНИЕ'
        },
        {
          id: 37,
          title: 'ЖИЗНЕННАЯ СИЛА'
        },
        {
          id: 38,
          title: 'НИСХОДЯЩАЯ ЭНЕРГИЯ'
        },
        {
          id: 39,
          title: 'ВЫДОХ'
        },
        {
          id: 40,
          title: 'ГАРМОНИЯ'
        },
        {
          id: 41,
          title: 'ОГОНЬ'
        },
        {
          id: 42,
          title: 'РОЖДЕНИЕ ЧЕЛОВЕКА'
        },
        {
          id: 43,
          title: 'НЕЗНАНИЕ'
        },
        {
          id: 44,
          title: 'ПРАВИЛЬНОЕ ЗНАНИЕ'
        },
        {
          id: 45,
          title: 'РАЗЛИЧЕНИЕ'
        },
        {
          id: 46,
          title: 'НЕЙТРАЛЬНОСТЬ'
        },
        {
          id: 47,
          title: 'СОЛНЦЕ'
        },
        {
          id: 48,
          title: 'ЛУНА'
        },
        {
          id: 49,
          title: 'АСКЕТИЗМ'
        },
        {
          id: 50,
          title: 'МАТЬ-ЗЕМЛЯ'
        },
        {
          id: 51,
          title: 'НАСИЛИЕ'
        },
        {
          id: 52,
          title: 'ВОДА'
        },
        {
          id: 53,
          title: 'ДУХОВНАЯ ПРЕДАННОСТЬ'
        },
        {
          id: 54,
          title: 'ЭГОИЗМ'
        },
        {
          id: 55,
          title: 'ОМ'
        },
        {
          id: 56,
          title: 'ВОЗДУХ'
        },
        {
          id: 57,
          title: 'СИЯНИЕ'
        },
        {
          id: 58,
          title: 'РЕАЛЬНОСТЬ'
        },
        {
          id: 59,
          title: 'ПОЗИТИВНЫЙ ИНТЕЛЛЕКТ'
        },
        {
          id: 60,
          title: 'НЕГАТИВНЫЙ ИНТЕЛЛЕКТ'
        },
        {
          id: 61,
          title: 'СЧАСТЬЕ'
        },
        {
          id: 62,
          title: 'ТЬМА'
        },
        {
          id: 63,
          title: 'ФЕНОМЕН'
        },
        {
          id: 64,
          title: 'ВНУТРЕННИЙ ПРОСТОР'
        },
        {
          id: 65,
          title: 'БЛАЖЕНСТВО'
        },
        {
          id: 66,
          title: 'КОСМИЧЕСКОЕ БЛАГО'
        },
        {
          id: 67,
          title: 'КОСМИЧЕСКОЕ СОЗНАНИЕ'
        },
        {
          id: 68,
          title: 'АБСОЛЮТ'
        },
        {
          id: 69,
          title: 'ИСТИНА'
        },
        {
          id: 70,
          title: 'ДЕЯТЕЛЬНОСТЬ'
        },
        {
          id: 71,
          title: 'НЕВЕЖЕСТВО'
        },
    ],
    allMoves: [] as MoveType[],
    players: [] as PlayerType[]
  }
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_PLAYERS': 
      return {
        ...state,
        players: action.payload
      }
      case 'LOGIN': 
        return {
          ...state,
          isLogged: action.payload
        }
      case 'UPDATE_ACTIVE_PLAYER': 
        return {
          ...state,
          players: [...state.players.map(player => {
            if (player.id === action.payload) {
              return {
                ...player,
                active: true
              }
            }
            return {
              ...player,
              active: false
            }
          })]
        }
      case 'ADD_MOVE': 
        return {
          ...state,
          players: [...state.players.map(player => {
            if (player.active) {
              return {
                ...player,
                moveList: [...player.moveList, action.payload]
              }
            }
            return {
              ...player
            }
          })]
        }
      default:
        return state
    }
  }
  
  export default reducer
  