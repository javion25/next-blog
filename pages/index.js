/**
 * Created by h9zhou on 2017/5/7.
 */
import React, { Component } from 'react';
import { Button } from 'antd';
import '~antd/dist/antd.css';

export default () => (
	<div>
		<h1>Welcome to next.js!</h1>
		<Button type="primary">Button</Button>
		<style jsx>{`
      h1 {
        color: blue;
      }
    `}</style>
	</div>
)