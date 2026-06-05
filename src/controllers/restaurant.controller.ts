import { Request, Response } from 'express';
import { T } from '../libs/types/common'
import MemberService from '../models/Member.service'
import { MemberInput } from '../libs/types/member';
import { MemberType } from '../libs/enums/member.enum';

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
  try {
    console.log('goHome');
    res.send('Home Page!');
    // response => send | json | render | redirect | end
  } catch (err) {
    console.log('ERROR on goHome: ', err);
  }
};

restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    console.log('getLogin');
    res.send('Login Page!');
  } catch (err) {
    console.log('ERROR on getLogin: ', err);
  }
};

restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    console.log('getSignup');
    res.send('Signup Page!');
  } catch (err) {
    console.log('ERROR on getSignup: ', err);
  }
};

restaurantController.processLogin = (req: Request, res: Response) => {
  try {
    console.log('processLogin');
    res.send('Login Processed!');
  } catch (err) {
    console.log('ERROR on processLogin: ', err);
  }
};

restaurantController.processSignup = async (req: Request, res: Response) => {
  try {
    console.log('processSignup');

    const newMember: MemberInput = req.body;
    newMember.memberType = MemberType.RESTAURANT;

    const memberService = new MemberService();
    const result = await memberService.proceessSignup(newMember);

    res.send('Signup Processed!');
  } catch (err: any) {
    console.log('ERROR on processSignup: ', err);
    if (err.code === 11000) {
      const field = Object.keys(err.keyPattern)[0];
      res.status(409).json({ message: `${field} already exists. Please use a different value.` });
    } else {
      res.status(500).json({ message: 'Internal server error' });
    }
  }
};

export default restaurantController;