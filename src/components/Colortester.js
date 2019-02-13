import React from "react";

const Color = (props) => {
  let classList = `COLORS-tester COLORS-color-${props.a}-${props.b}`;
  return (
    <div className={classList}>
      {props.b}
    </div>
  )
}

const BgColor = (props) => {
  let classes = `COLORS-tester COLORS-backgroundcolor-${props.a}-${props.b}`;
  return (
    <div className={classes}>
      {props.b}
    </div>
  )
}

const BorderColor = (props) => {
  let classes = `COLORS-tester COLORS-bordercolor-${props.a}-${props.b}`;
  return (
    <div className={classes}>
      {props.b}
    </div>
  )
}

const Bundler = (props) => {
  return (
    <div className="COLORS-floater">
      <Color a={props.a} b={props.b} />
      <BgColor a={props.a} b={props.b} />
      <BorderColor a={props.a} b={props.b} />
    </div>
  )
}

export const Colortester = () => {
  return (
    <div>
      <div className="COLORS-wrapper">
        <Bundler a="combatType" b="melee" />
        <Bundler a="class" b="warrior" />
      </div>
      <div className="COLORS-wrapper">
        <Bundler a="combatType" b="ranged" />
        <Bundler a="class" b="ranger" />
      </div>

      <div className="COLORS-wrapper">
        <Bundler a="combatType" b="magic" />
        <Bundler a="class" b="fire" />
        <Bundler a="class" b="frost" />
        <Bundler a="class" b="shadow" />
        <Bundler a="class" b="restoration" />
      </div>

      <div className="COLORS-wrapper">
        <Bundler a="actionType" b="attack" />
        <Bundler a="actionType" b="heal" />
        <Bundler a="actionType" b="absorb" />
        <Bundler a="actionType" b="aura" />
      </div>
    </div>
  )
}
