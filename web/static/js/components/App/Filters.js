import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import classname from 'classname'
import { register } from '../../store'
import './Filters.css'

/* ACTIONS */

export const TOGGLE_FILTERS = 'filters/TOGGLE_FILTERS'
export function toggleFilters () {
  return { type: TOGGLE_FILTERS }
}

export const SET_SIZE = 'filters/SET_SIZE'
export function setSize (size) {
  return { type: SET_SIZE, payload: size }
}

export const SET_SEARCH_FOCUS = 'filters/SET_SEARCH_FOCUS'
export function setSearchFocus (focus) {
  return { type: SET_SEARCH_FOCUS, payload: focus }
}

export const SET_QUERY = 'filters/SET_QUERY'
export function setQuery (query) {
  return { type: SET_QUERY, payload: query }
}

/* REDUCER */

export const initialState = {
  searchFocused: false,
  open: false,
  size: null,
  query: ''
}

export function reducer (state = initialState, action) {
  switch (action.type) {
    case TOGGLE_FILTERS:
      return { ...state, open: !state.open, size: null }
    case SET_SIZE:
      return { ...state, size: action.payload }
    case SET_SEARCH_FOCUS:
      return { ...state, searchFocused: action.payload }
    case SET_QUERY:
      return { ...state, query: action.payload }
    default:
      return state
  }
}

register({ filters: reducer })

/* COMPONENT */

const stateToProps = (state) => ({
  ...state.filters
})

class Filters extends Component {
  static propTypes = {
    searchFocused: PropTypes.bool.isRequired,
    open: PropTypes.bool.isRequired,
    size: PropTypes.string,
    query: PropTypes.string.isRequired
  }

  handleSizeChange (event) {
    this.props.dispatch(setSize(event.target.value))
  }

  handleToggle () {
    this.props.dispatch(toggleFilters())
  }

  handleSearchFocus (event) {
    this.props.dispatch(setSearchFocus(true))
  }

  handleSearchBlur (event) {
    this.props.dispatch(setSearchFocus(false))
  }

  handleClearSearch (event) {
    this.props.dispatch(setQuery(''))
  }

  handleQueryChange (event) {
    this.props.dispatch(setQuery(event.target.value))
  }

  render () {
    const { searchFocused, open, query, size } = this.props
    const cls = classname('Filters', {
      'Filters--focus': searchFocused,
      'Filters--open': open
    })

    const clearCls = classname('Filters-search-clear', {
      'Filters-search-clear--visible': query.length > 0
    })

    return <div className={cls}>
      <div className='Filters-toolbar'>
        <div className='Filters-search'>
          <button className='Filters-search-submit' type='submit'>
            <MagnifyingGlassIcon />
          </button>
          <input type='search'
            autoCapitalize='off'
            autoComplete='off'
            className='Filters-search-field'
            placeholder='Søg...'
            onFocus={::this.handleSearchFocus}
            onBlur={::this.handleSearchBlur}
            onChange={::this.handleQueryChange}
            value={query}
          />
          <button className={clearCls} onClick={::this.handleClearSearch}>
            <CrossIcon />
          </button>
        </div>
        <button className='Filters-size-toggle' onClick={::this.handleToggle}>
          <span className='Filters-size-toggle-open'>
            <BirdIcon />
            <TriangleIcon />
          </span>
          <span className='Filters-size-toggle-clear'>
            <CloseIcon />
          </span>
        </button>
      </div>

      <div className='Filters-size'>
        <div className='Filters-size-dropdown'>
          <div>
            <input type='radio' name='size' value='S' id='small' checked={size === 'S'} onChange={::this.handleSizeChange} />
            <label htmlFor='small'>Lille</label>
          </div>
          <div>
            <input type='radio' name='size' value='M' id='medium' checked={size === 'M'} onChange={::this.handleSizeChange} />
            <label htmlFor='medium'>Mellem</label>
          </div>
          <div>
            <input type='radio' name='size' value='L' id='large' checked={size === 'L'} onChange={::this.handleSizeChange} />
            <label htmlFor='large'>Stor</label>
          </div>
          <svg width='17px' height='8px' viewBox='0 0 17 8' version='1.1'>
            <path d='M0.258116165,0.654611411 C-0.164583347,0.293079512 -0.0546119851,0 0.489192779,0 L16.0921048,0 C16.6424244,0 16.7544017,0.285791732 16.3231814,0.654611411 L9.05601396,6.87016828 C8.63331445,7.23170017 7.95650393,7.23898795 7.52528362,6.87016828 L0.258116165,0.654611411 Z' id='arrow' fill='#C1BD9F' transform='translate(8.293446, 3.572028) scale(1, -1) translate(-8.293446, -3.572028)'></path>
          </svg>
        </div>
      </div>
    </div>
  }
}

export default connect(stateToProps)(Filters)

/* ICONS */

function MagnifyingGlassIcon () {
  return <svg width='19px' height='19px' viewBox='0 0 19 19'>
    <g fill='#314560'>
      <path d='M8,16 C3.581722,16 0,12.418278 0,8 C0,3.581722 3.581722,0 8,0 C12.418278,0 16,3.581722 16,8 C16,12.418278 12.418278,16 8,16 Z M8,12 C10.209139,12 12,10.209139 12,8 C12,5.790861 10.209139,4 8,4 C5.790861,4 4,5.790861 4,8 C4,10.209139 5.790861,12 8,12 Z'></path>
      <path d='M11.6420748,14.458627 L15.5735885,18.3901407 C16.3546371,19.1711893 17.620967,19.1711893 18.4020156,18.3901407 C19.1830642,17.6090921 19.1830642,16.3427622 18.4020156,15.5617136 L14.470502,11.6301999 C13.6894534,10.8491513 12.4231234,10.8491513 11.6420748,11.6301999 C10.8610263,12.4112485 10.8610263,13.6775785 11.6420748,14.458627 L11.6420748,14.458627 Z' id='Combined-Shape'></path>
    </g>
  </svg>
}

function CrossIcon () {
  return <svg width='12px' height='12px' viewBox='0 0 12 12'>
    <path d='M4.12132034,6.24264069 L0.939339828,3.06066017 C0.353553391,2.47487373 0.353553391,1.52512627 0.939339828,0.939339828 C1.52512627,0.353553391 2.47487373,0.353553391 3.06066017,0.939339828 L6.24264069,4.12132034 L9.4246212,0.939339828 C10.0104076,0.353553391 10.9601551,0.353553391 11.5459415,0.939339828 C12.131728,1.52512627 12.131728,2.47487373 11.5459415,3.06066017 L8.36396103,6.24264069 L11.5459415,9.4246212 C12.131728,10.0104076 12.131728,10.9601551 11.5459415,11.5459415 C10.9601551,12.131728 10.0104076,12.131728 9.4246212,11.5459415 L6.24264069,8.36396103 L3.06066017,11.5459415 C2.47487373,12.131728 1.52512627,12.131728 0.939339828,11.5459415 C0.353553391,10.9601551 0.353553391,10.0104076 0.939339828,9.4246212 L4.12132034,6.24264069 Z' id='cross' fill='#314560'></path>
  </svg>
}

function BirdIcon () {
  return <svg id='bird' width='28px' height='20px' viewBox='0 0 28 20'>
    <path d='M8,16.8003751 C0.307276802,16.2725002 -3.91000344e-09,8.46732161 0,8.46732161 C3.13585328,10.2474671 5.08746443,9.4672767 6.13550615,7.67352415 C6.67670683,6.74724415 6.83681332,5.48116083 7.15867328,4.33839566 C7.21382431,4.12010676 7.2827421,3.90720404 7.36446249,3.70064028 C7.40290674,3.5978295 7.44376126,3.49694168 7.4874959,3.39837766 C7.49026505,3.39795613 7.49304631,3.39753731 7.49583965,3.39712118 C8.34448402,1.59557716 10.1927952,0.346727619 12.3362832,0.346727619 C14.8391985,0.346727619 16.9396449,2.04951469 17.5159908,4.34672762 L19.1492862,4.34672762 C19.6972491,4.34672762 19.8164872,4.66060091 19.4200733,5.04347445 L17.7708678,6.63634775 C17.5413781,10.0522666 16.3939456,15.4776335 11,16.6150263 L11,17.8431373 C11,18.6735473 10.3342028,19.3467276 9.5,19.3467276 C8.67157288,19.3467276 8,18.6695609 8,17.8431373 L8,16.8003751 Z M24,15 L22.498031,15 C21.9313804,15 21.7659824,15.3524172 22.1036397,15.7871458 L24.3908016,18.7318317 C24.7267661,19.1643809 25.2759095,19.1665603 25.6135669,18.7318317 L27.9007287,15.7871458 C28.2366933,15.3545966 28.061811,15 27.5063374,15 L26,15 L26,5.05706137 L27.5063374,5.05706137 C28.061811,5.05706137 28.2366933,4.70246479 27.9007287,4.26991557 L25.6135669,1.3252297 C25.2759095,0.890501082 24.7267661,0.892680485 24.3908016,1.3252297 L22.1036397,4.26991557 C21.7659824,4.70464419 21.9313804,5.05706137 22.498031,5.05706137 L24,5.05706137 L24,15 Z M14,5.34672762 C14.5522847,5.34672762 15,4.89901237 15,4.34672762 C15,3.79444287 14.5522847,3.34672762 14,3.34672762 C13.4477153,3.34672762 13,3.79444287 13,4.34672762 C13,4.89901237 13.4477153,5.34672762 14,5.34672762 Z' fill='#304461'></path>
  </svg>
}

function TriangleIcon () {
  return <svg id='triangle' width='25px' height='43px' viewBox='0 0 25 43'>
    <rect fill='#314560' x='0' y='0' width='25' height='43' rx='2'></rect>
    <path d='M8.13964537,18.8340337 C7.83746311,18.3734096 8.04237028,18 8.59349759,18 L16.4644249,18 C17.0172628,18 17.2206265,18.373155 16.9182771,18.8340337 L13.0761106,24.6907459 C12.7739284,25.1513701 12.2841612,25.1516247 11.9818119,24.6907459 L8.13964537,18.8340337 Z' fill='#C1BD9F'></path>
  </svg>
}

function CloseIcon () {
  return <svg width='12px' height='12px' viewBox='0 0 12 12'>
    <path d='M4.12132034,6.24264069 L0.939339828,3.06066017 C0.353553391,2.47487373 0.353553391,1.52512627 0.939339828,0.939339828 C1.52512627,0.353553391 2.47487373,0.353553391 3.06066017,0.939339828 L6.24264069,4.12132034 L9.4246212,0.939339828 C10.0104076,0.353553391 10.9601551,0.353553391 11.5459415,0.939339828 C12.131728,1.52512627 12.131728,2.47487373 11.5459415,3.06066017 L8.36396103,6.24264069 L11.5459415,9.4246212 C12.131728,10.0104076 12.131728,10.9601551 11.5459415,11.5459415 C10.9601551,12.131728 10.0104076,12.131728 9.4246212,11.5459415 L6.24264069,8.36396103 L3.06066017,11.5459415 C2.47487373,12.131728 1.52512627,12.131728 0.939339828,11.5459415 C0.353553391,10.9601551 0.353553391,10.0104076 0.939339828,9.4246212 L4.12132034,6.24264069 Z' id='cross' fill='#2E4660'></path>
  </svg>
}
