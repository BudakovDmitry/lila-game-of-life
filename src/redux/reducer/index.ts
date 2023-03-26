import { MoveType } from 'src/types'

const initialState = {
    isLogged: true,
    users: [
      {
        email: 'test@gmail.com',
        password: 'spalding'
      }
    ],
    cards: [
        {
            id: 0,
            title: 'РОЖДЕНИЕ (ДЖАНМА)'
        },
        {
          id: 1,
          title: 'МАЙЯ'
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
          title: 'ФИЗИЧЕСКИЙ ПЛАН (БХУ-ЛОКА)'
        },
        {
          id: 5,
          title: 'ЗАБЛУЖДЕНИЕ (МОХА)'
        },
        {
          id: 6,
          title: 'ТЩЕСЛАВИЕ (МАДА)'
        },
        {
          id: 7,
          title: 'АЛЧНОСТЬ (МАТСАРА ИЛИ МАТСАРЬЯ)'
        },
        {
          id: 8,
          title: 'ЧУВСТВЕННЫЙ ПЛАН (КАМА-ЛОКА)'
        },
        {
          id: 9,
          title: 'ОЧИЩЕНИЕ (ТАПА)'
        },
        {
          id: 10,
          title: 'РАЗВЛЕЧЕНИЯ (ГАНДХАРВЫ)'
        },
        {
          id: 11,
          title: 'ЗАВИСТЬ (ИРАСЬЯ)'
        },
        {
          id: 12,
          title: 'НИЧТОЖНОСТЬ (АНТАРИКША)'
        },
        {
          id: 13,
          title: 'АСТРАЛЬНЫЙ ПЛАН (БХУВАР-ЛОКА)'
        },
        {
          id: 14,
          title: 'ПЛАН ФАНТАЗИИ (НАГА-ЛОКА)'
        },
        {
          id: 15,
          title: 'РЕВНОСТЬ (ДВЕША)'
        },
        {
          id: 16,
          title: 'СОСТРАДАНИЕ (ДАЙЯ)'
        },
        {
          id: 17,
          title: 'ПЛАН РАДОСТИ (ХАРША-ЛОКА)'
        },
        {
          id: 18,
          title: 'ПЛАН КАРМЫ (КАРМА-ЛОКА)'
        },
        {
          id: 19,
          title: 'БЛАГОТВОРИТЕЛЬНОСТЬ (ДАНА)'
        },
        {
          id: 20,
          title: 'ИСКУПЛЕНИЕ (САМАНА ПАПА)'
        },
        {
          id: 21,
          title: 'ПЛАН ДХАРМЫ (ДХАРМА-ЛОКА)'
        },
        {
          id: 22,
          title: 'НЕБЕСНЫЙ ПЛАН (СВАРГА-ЛОКА)'
        },
        {
          id: 23,
          title: 'ПЛОХАЯ КОМПАНИЯ (КУ-САНГ-ЛОКА)'
        },
        {
          id: 24,
          title: 'ХОРОШАЯ КОМПАНИЯ (СУ-САНГ-ЛОКА)'
        },
        {
          id: 25,
          title: 'ПЕЧАЛЬ (ДУКХА)'
        },
        {
          id: 26,
          title: 'САМООТВЕРЖЕННОЕ СЛУЖЕНИЕ (ПАРАМАРТХА)'
        },
        {
          id: 27,
          title: 'ИСТИННАЯ РЕЛИГИОЗНОСТЬ (СУДХАРМА)'
        },
        {
          id: 28,
          title: 'ОТСУТСТВИЕ РЕЛИГИОЗНОСТИ (АДХАРМА)'
        },
        {
          id: 29,
          title: 'ХОРОШИЕ ТЕНДЕНЦИИ (УТТАМА ГАТИ)'
        },
        {
          id: 30,
          title: 'ПЛАН СВЯТОСТИ (ЯКША-ЛОКА)'
        },
        {
          id: 31,
          title: 'ПЛАН РАВНОВЕСИЯ (МАХАР-ЛОКА)'
        },
        {
          id: 32,
          title: 'ПЛАН АРОМАТОВ (ГАНДХА-ЛОКА)'
        },
        {
          id: 33,
          title: 'ПЛАН ВКУСА (РАСА-ЛОКА)'
        },
        {
          id: 34,
          title: 'ЧИСТИЛИЩЕ (НАРАКА-ЛОКА)'
        },
        {
          id: 35,
          title: 'ЯСНОСТЬ СОЗНАНИЯ (СВАЧЧАХА)'
        },
        {
          id: 36,
          title: 'ДЖНЯНА (ГЬЯНА)'
        },
        {
          id: 37,
          title: 'ПРАНА-ЛОКА'
        },
        {
          id: 38,
          title: 'АПАНА-ЛОКА'
        },
        {
          id: 39,
          title: 'ВЬЯНА-ЛОКАВ'
        },
        {
          id: 40,
          title: 'ЧЕЛОВЕЧЕСКИЙ ПЛАН (ДЖАНА-ЛОКА)'
        },
        {
          id: 41,
          title: 'ПЛАН АГНИ (АГНИ-ЛОКА)'
        },
        {
          id: 42,
          title: 'РОЖДЕНИЕ ЧЕЛОВЕКА (МАНУШЬЯ-ДЖАНМА)'
        },
        {
          id: 43,
          title: 'НЕВЕДЕНИЕ (АВИДЬЯ)'
        },
        {
          id: 44,
          title: 'ПРАВИЛЬНОЕ ЗНАНИЕ (СУВИДЪЯ)'
        },
        {
          id: 45,
          title: 'РАЗЛИЧЕНИЕ (ВИВЕКА)'
        },
        {
          id: 46,
          title: 'ПЛАН НЕЙТРАЛЬНОСТИ (САРАСВАТИ)'
        },
        {
          id: 47,
          title: 'СОЛНЕЧНЫЙ ПЛАН (ЯМУНА)'
        },
        {
          id: 48,
          title: 'ЛУННЫЙ ПЛАН (ГАНГА)'
        },
        {
          id: 49,
          title: 'ПЛАН АСКЕТИЗМА (ТАПА-ЛОКА)'
        },
        {
          id: 50,
          title: 'ЗЕМЛЯ (ПРИТХИВИ)'
        },
        {
          id: 51,
          title: 'ПЛАН НАСИЛИЯ (ХИМСА-ЛОКА)'
        },
        {
          id: 52,
          title: 'ПЛАН ЖИДКОСТЕЙ (ДЖАЛА-ЛОКА)'
        },
        {
          id: 53,
          title: 'ПЛАН ДУХОВНОЙ ПРЕДАННОСТИ (БХАКТИ-ЛОКА)'
        },
        {
          id: 54,
          title: 'ЭГОИЗМ (АХАМКАРА)'
        },
        {
          id: 55,
          title: 'ПЛАН ИЗНАЧАЛЬНЫХ ВИБРАЦИЙ (ОМКАРА)'
        },
        {
          id: 56,
          title: 'ПЛАН ГАЗОВ (ВАЙЮ-ЛОКА)'
        },
        {
          id: 57,
          title: 'ПЛАН СИЯНИЯ (ТЕДЖА-ЛОКА)'
        },
        {
          id: 58,
          title: 'ПЛАН РЕАЛЬНОСТИ (САТЬЯ-ЛОКА)'
        },
        {
          id: 59,
          title: 'ПОЗИТИВНЫЙ ИНТЕЛЛЕКТ (СУБУДДХИ)'
        },
        {
          id: 60,
          title: 'НЕГАТИВНЫЙ ИНТЕЛЛЕКТ (ДУРБУДДХИ)'
        },
        {
          id: 61,
          title: 'СЧАСТЬЕ (СУКХА)'
        },
        {
          id: 62,
          title: 'ТАМАС'
        },
        {
          id: 63,
          title: 'ФЕНОМЕНАЛЬНЫЙ ПЛАН (ПРАКРИТИ-ЛОКА)'
        },
        {
          id: 64,
          title: 'ПЛАН ВНУТРЕННЕГО ПРОСТРАНСТВА (УРАНТА-ЛОКА)'
        },
        {
          id: 65,
          title: 'ПЛАН БЛАЖЕНСТВА (АНАНДА-ЛОКА)'
        },
        {
          id: 66,
          title: 'ПЛАН КОСМИЧЕСКОГО БЛАГА (РУДРА-ЛОКА)'
        },
        {
          id: 67,
          title: 'КОСМИЧЕСКОЕ СОЗНАНИЯ (ВАЙКУНТХА-ЛОКА)'
        },
        {
          id: 68,
          title: 'ПЛАН АБСОЛЮТА (БРАХМА-ЛОКА)'
        },
        {
          id: 69,
          title: 'САТТВАГУНА'
        },
        {
          id: 70,
          title: 'РАДЖОГУНА'
        },
        {
          id: 71,
          title: 'ТАМОГУНА'
        },
    ],
    allMoves: [] as MoveType[],
    players: [
      {
        id: 0,
        name: 'Test 1',
        moveList: [] as MoveType[],
        active: true
      },
      {
        id: 1,
        name: 'Test 2',
        moveList: [] as MoveType[],
        active: false
      },
      {
        id: 2,
        name: 'Test 3',
        moveList: [] as MoveType[],
        active: false
      },
      {
        id: 3,
        name: 'Test 4',
        moveList: [] as MoveType[],
        active: false
      },
    ]
  }
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      // case 'ADD_MOVE':
      //   return {
      //     ...state,
      //     allMoves: [...state.allMoves, action.payload],
      //   }
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
  