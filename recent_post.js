import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function recent_post() {
  return (
    <section>
      <div { ...useBlockProps() }  className={ 'alignwide' }>
	        <InnerBlocks
				template={[
					['core/query', {
							queryId:44,
							query: {
								offset:0,
								postType: 'post',
								order: 'desc',
								orderBy: 'date',
								perPage: 6,
								author: '',
								search: '',
								sticky:'',
							},
							displayLayout: { type: 'flex', columns: 3 },
							align: 'wide'							
						},
						[
							['core/post-template', { align: 'wide' },
								[
									['core/post-featured-image', { isLink: 1 }],
									['core/group', {											
											style: {
												color:{background: '#f7fbfb'},												
												border: { radius: { bottomLeft: '15px', bottomRight: '15px' } },
												spacing: { padding: { bottom: '25px', top: '25px', right: '25px', left: '25px' } },
											}
										},
										[
											['core/post-title', {
												isLink: 1,
												style: {
													typography: { fontSize: '26px', fontWeight: 700 },
												}
											}],
											
											['core/post-excerpt', {
												textAlign: 'left',
												moreText: 'Learn More',
												className: 'blog_post_learn_more',
												style: {
													typography: { fontSize: '16px'},
												}
											}],
										]
									]
								]
							],
							['core/separator', { className: 'alignwide is-style-wide' }],
							['core/query-pagination', {
									paginationArrow: 'arrow',
									align: 'wide',
									layout: {type:'flex', justifyContent:'space-between'},
								},
								[
									['core/query-pagination-previous', {}],
									['core/query-pagination-numbers', {}],
									['core/query-pagination-next', {}],
								],
							],
						]
					]
	            ] }
	            templateLock="all"
	        />
	    </div>
    </section>
  );
}

