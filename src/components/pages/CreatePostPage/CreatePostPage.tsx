import { useAuth } from '../../hooks/use-auth';
import { useNavigate } from "react-router-dom";
import { CreatePostInput } from '../../ui/createPostInput/CreatePostInput';

export const CreatePostPage = () => { 
  const navigate = useNavigate();
  const { isAuth } = useAuth();
  
  return isAuth ? (
    <div>
      <h1>CreatePostPage</h1>
      <CreatePostInput />
      <div>
        
      </div>
    </div>
  ) : (
    <>{navigate("/posts")}</>
  );
}
