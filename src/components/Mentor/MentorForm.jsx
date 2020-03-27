import React from 'react';
import { Router } from 'react-router-dom';

function Mentor(props){
  let _name = null
  let _position = null
  let _company = null
  let _gender = null
  let _genderPref = null
  let _yearsInTech = null
  let _specialty = null
  let _priorities = null
  let _misc = null

  function mentor(event){
    event.preventDefault();
    props.createMentor({
      name: _name.value,
      position: _position.value,
      company: _company.value,
      gender: _gender.value,
      genderPref: _genderPref.value,
      yearsInTech: _yearsInTech.value,
      specialty: _specialty.value,
      priorities: _priorities.value,
      misc: _misc.value
    });

    _name.value = '';
    _position.value = '';
    _company.value = '';
    _gender.value = '';
    _genderPref.value = '';
    _yearsInTech.value = '';
    _specialty.value = '';
    _priorities.value = '';
    _misc.valud = '';
    }



  return (
    <div onSubmit={mentor}>
    <div className='form'>
    <form>
    <input
    type='text'
    id='name'
    placeholder='First and Last Name'
    ref={(input) => {_name = input}}/>
    <input
    type='text'
    id='position'
    placeholder='Position Title'
    ref={(input) => {_position = input}}/>
    <input
    type='text'
    id='company'
    placeholder='Company or School Name'
    ref={(input) => {_company = input}}/>
    <input
    type='text'
    id='gender'
    placeholder='Gender'
    ref={(input) => {_gender = input}}/>
    <input
    type='text'
    id='genderPref'
    placeholder='Mentor Gender Preference'
    ref={(input) => {_genderPref = input}}/>
    <input
    type='text'
    id='yearsInTech'
    placeholder='Years in Tech'
    ref={(input) => {_yearsInTech = input}}/>
    <input
    type='text'
    id='specialty'
    placeholder='Specialty'
    ref={(input) => {_specialty = input}}/>

    <div id="priorities">

    <input type="checkbox" id="vehicle1" name="vehicle1" value="Efficiency">
    <label for="Efficiency">Efficiency</label>

    </div>

    <input
    type='text'
    id='misc'
    placeholder='Misc'
    ref={(input) => {_misc = input}}/>
    <div className='button'>
    <input type="submit" value="Add" />
    </div>
    </form>
    </div>
    </div>
  );
}
export default Mentor;
