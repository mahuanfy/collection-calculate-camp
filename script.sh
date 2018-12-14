#!/usr/bin/env bash

rm -rf spec
mv ./__answerBranch/spec ./spec
npm i
npm test
