
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const SignUpForm = () => {
  return (
    <form className="space-y-6">
      <div>
        <Label className="text-white/80">Username</Label>
        <Input
          type="text"
          placeholder="Choose a username"
          className="mt-2 bg-white/5 border-white/10 text-white placeholder:text-white/30"
        />
      </div>
      <div>
        <Label className="text-white/80">Email</Label>
        <Input
          type="email"
          placeholder="Enter your email"
          className="mt-2 bg-white/5 border-white/10 text-white placeholder:text-white/30"
        />
      </div>
      <div>
        <Label className="text-white/80">Password</Label>
        <Input
          type="password"
          placeholder="Enter your password"
          className="mt-2 bg-white/5 border-white/10 text-white placeholder:text-white/30"
        />
      </div>
      <div>
        <Label className="text-white/80">Confirm Password</Label>
        <Input
          type="password"
          placeholder="Confirm your password"
          className="mt-2 bg-white/5 border-white/10 text-white placeholder:text-white/30"
        />
      </div>
      <Button className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500">
        Create Account
      </Button>
    </form>
  );
};

export default SignUpForm;
