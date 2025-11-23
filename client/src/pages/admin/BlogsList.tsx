import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/hooks/useAuth';
import { FileText, Plus, Edit, Trash2, Eye, EyeOff } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
}

export default function BlogsList() {
  const { authenticated, loading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loadingBlogs, setLoadingBlogs] = useState(true);

  useEffect(() => {
    if (!loading && !authenticated) {
      navigate('/admin/login');
    }
  }, [authenticated, loading, navigate]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch('/api/blogs');
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to load blogs',
        variant: 'destructive',
      });
    } finally {
      setLoadingBlogs(false);
    }
  };

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Are you sure you want to delete "${title}"?`)) return;

    try {
      const response = await fetch(`/api/blogs/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        toast({
          title: 'Success',
          description: 'Blog deleted successfully',
        });
        fetchBlogs();
      } else {
        throw new Error('Delete failed');
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to delete blog',
        variant: 'destructive',
      });
    }
  };

  if (loading || !authenticated) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/admin/dashboard">
                <Button variant="ghost">← Dashboard</Button>
              </Link>
              <h1 className="text-2xl font-bold">Blogs</h1>
            </div>
            <Link to="/admin/blogs/new">
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                New Blog
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {loadingBlogs ? (
          <div className="text-center py-12">Loading blogs...</div>
        ) : blogs.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <FileText className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-lg font-semibold mb-2">No blogs yet</h3>
              <p className="text-muted-foreground mb-4">
                Get started by creating your first blog post
              </p>
              <Link to="/admin/blogs/new">
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  Create Blog
                </Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {blogs.map((blog) => (
              <Card key={blog.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <CardTitle className="text-xl">{blog.title}</CardTitle>
                        <Badge variant={blog.isPublished ? 'default' : 'secondary'}>
                          {blog.isPublished ? (
                            <>
                              <Eye className="w-3 h-3 mr-1" />
                              Published
                            </>
                          ) : (
                            <>
                              <EyeOff className="w-3 h-3 mr-1" />
                              Draft
                            </>
                          )}
                        </Badge>
                      </div>
                      {blog.excerpt && (
                        <p className="text-muted-foreground">{blog.excerpt}</p>
                      )}
                      <div className="text-sm text-muted-foreground mt-2">
                        Created: {new Date(blog.createdAt).toLocaleDateString()}
                        {' • '}
                        Updated: {new Date(blog.updatedAt).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Link to={`/admin/blogs/${blog.id}`}>
                        <Button variant="outline" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                      </Link>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDelete(blog.id, blog.title)}
                      >
                        <Trash2 className="w-4 h-4 text-destructive" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
